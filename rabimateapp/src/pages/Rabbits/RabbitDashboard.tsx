import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Chip,
  Container,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import axios from 'axios';

interface RabbitCardData {
  id: string;
  code: string;
  breed: string;
  rabbitCode: string;
  cage: string;
  gender: string;
  dob: string;
  imported: boolean;
  isAvailable: boolean;
  dateAdded: string;
}

export default function RabbitDashboard() {
  const [rabbits, setRabbits] = useState<RabbitCardData[]>([]);
  const [filteredRabbits, setFilteredRabbits] = useState<RabbitCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [availabilityFilter, setAvailabilityFilter] = useState('all');

  useEffect(() => {
    fetchRabbits();
  }, []);

  const filterRabbits = useCallback(() => {
    const filtered = rabbits.filter((rabbit) => {
      const matchesSearch = rabbit.rabbitCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rabbit.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rabbit.cage.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesGender = genderFilter === 'all' || rabbit.gender.toLowerCase() === genderFilter.toLowerCase();
      const matchesAvailability = availabilityFilter === 'all' ||
        (availabilityFilter === 'available' ? rabbit.isAvailable : !rabbit.isAvailable);

      return matchesSearch && matchesGender && matchesAvailability;
    });

    setFilteredRabbits(filtered);
  }, [availabilityFilter, genderFilter, rabbits, searchTerm]);

  useEffect(() => {
    filterRabbits();
  }, [filterRabbits]);

  const fetchRabbits = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://localhost:7192/api/rabbits');
      setRabbits(response.data || []);
    } catch (error) {
      console.error('Failed to fetch rabbits:', error);
    } finally {
      setLoading(false);
    }
  };


  const getGenderColor = (gender: string) => {
    const lowerGender = gender.toLowerCase();
    if (lowerGender.includes('buck') || lowerGender.includes('male')) return '#926841';
    if (lowerGender.includes('doe') || lowerGender.includes('female')) return '#d4a574';
    return '#a68968';
  };

  const calculateAge = (dob: string) => {
    if (!dob) return 'N/A';
    const birthDate = new Date(dob);
    const today = new Date();
    const ageMs = today.getTime() - birthDate.getTime();
    const ageDate = new Date(ageMs);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();

    if (years > 0) return `${years}y ${months}m`;
    return `${months}m`;
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: '7%', marginBottom: '5%' }}>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" sx={{ marginBottom: 3, color: '#926841', fontWeight: 'bold' }}>
          Rabbit Dashboard
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' }, gap: 2, marginBottom: 3 }}>
          <TextField
            placeholder="Search by code, breed, or cage..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#926841' },
                '&:hover fieldset': { borderColor: '#926841' },
              },
            }}
          />

          <FormControl size="small" fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              value={genderFilter}
              label="Gender"
              onChange={(e) => setGenderFilter(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#926841' },
                },
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="buck">Buck (Male)</MenuItem>
              <MenuItem value="doe">Doe (Female)</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" fullWidth>
            <InputLabel>Availability</InputLabel>
            <Select
              value={availabilityFilter}
              label="Availability"
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#926841' },
                },
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="unavailable">Unavailable</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Typography variant="body2" sx={{ color: '#666', marginBottom: 2 }}>
          Showing {filteredRabbits.length} of {rabbits.length} rabbits
        </Typography>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <CircularProgress sx={{ color: '#926841' }} />
        </Box>
      ) : filteredRabbits.length > 0 ? (
        <Grid container spacing={3}>
          {filteredRabbits.map((rabbit) => (

            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={rabbit.id} component="div">
              <Card
                sx={{
                  height: '100%',
                  border: '2px solid #926841',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(146, 104, 65, 0.3)',
                    transform: 'translateY(-4px)',
                  },
                  backgroundColor: '#faf6f1',
                }}
              >
                <CardContent>
                  <Box sx={{ marginBottom: 2 }}>
                    <Typography variant="h6" sx={{ color: '#926841', fontWeight: 'bold', marginBottom: 1 }}>
                      {rabbit.rabbitCode}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', marginBottom: 2 }}>
                      <Chip
                        label={rabbit.breed}
                        size="small"
                        sx={{ backgroundColor: '#d2c9bb', color: '#333' }}
                      />
                      <Chip
                        label={rabbit.gender}
                        size="small"
                        sx={{ backgroundColor: getGenderColor(rabbit.gender), color: '#fff' }}
                      />
                      <Chip
                        label={rabbit.isAvailable ? 'Available' : 'In Use'}
                        size="small"
                        sx={{
                          backgroundColor: rabbit.isAvailable ? '#90EE90' : '#FFB6C6',
                          color: '#333',
                          fontWeight: 'bold',
                        }}
                      />
                    </Box>
                  </Box>

                  <Box sx={{ display: 'grid', gap: 1, fontSize: '0.9rem', color: '#555' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Cage:</Typography>
                      <Typography variant="body2">{rabbit.cage}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Age:</Typography>
                      <Typography variant="body2">{calculateAge(rabbit.dob)}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>DOB:</Typography>
                      <Typography variant="body2">
                        {new Date(rabbit.dob).toLocaleDateString('en-US')}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Imported:</Typography>
                      <Typography variant="body2">{rabbit.imported ? 'Yes' : 'No'}</Typography>
                    </Box>
                  </Box>

                  <Box sx={{ marginTop: 2, paddingTop: 2, borderTop: '1px solid #e0d7d0' }}>
                    <Typography variant="caption" sx={{ color: '#999' }}>
                      Added: {new Date(rabbit.dateAdded).toLocaleDateString('en-US')}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      ) : (
        <Box sx={{ textAlign: 'center', padding: 5 }}>
          <Typography variant="h6" sx={{ color: '#926841' }}>
            No rabbits found matching your filters.
          </Typography>
        </Box>
      )}
    </Container>
  );
}
