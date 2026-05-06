
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, type GridColDef, type GridRowSelectionModel } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { } from '@mui/x-data-grid/themeAugmentation';
import axios from "axios";
import { useEffect, useState } from "react";


//import { useRabbits } from "../../lib/hooks/useRabbits";
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', type: 'string', width: 90 },
    {
        field: 'breed',
        headerName: 'Breed',
        type: 'string',
        width: 120,
        description: 'Rabbit breed name',
        editable: false,
        headerAlign: 'center',

    },
    {
        field: 'rabbitCode',
        headerName: 'Rabbit Code',
        type: 'string',
        editable: false,
        headerAlign: 'center'
    },
    {
        field: 'cage',
        headerName: 'Cage',
        type: 'string',
        width: 60,
        editable: false,
        headerAlign: 'center'
    },
    {
        field: 'gender',
        headerName: 'Gender',
        description: 'this is the gender on the rabbit(buck/doe).',
        //sortable: true,
        width: 70,
        headerAlign: 'center'
    },
    {
        field: 'dob',
        headerName: 'Birth',
        type: 'date',
        sortable: true,
        width: 100,
        headerAlign: 'center',
        description: 'rabbit date of birth',
        valueFormatter: (param) => {
            if (param) {
                return new Date(param).toLocaleDateString('en-US');
            }
            return '';
        }
    },
    {
        field: 'imported',
        headerName: 'Imported',
        type: 'boolean',
        sortable: true,
        description: 'rabbit was bought',
        width: 85,
        headerAlign: 'center',
    },
    {
        field: 'isAvailable',
        headerName: 'Available',
        type: 'boolean',
        //sortable: true,
        width: 85,
        headerAlign: 'center',
    },
    {
        field: 'dateAdded',
        headerName: 'Added Date',
        type: 'date',
        sortable: true,
        width: 100,
        headerAlign: 'center',
        valueFormatter: (param) => {
            if (param) {
                return new Date(param).toLocaleDateString('en-US')
            }
            return '';
        }

    },
    {
        field: 'dateUpdated',
        headerName: 'Added Updated',
        type: 'date',
        sortable: true,
        width: 130,
        headerAlign: 'center',
        valueFormatter: (param) => {
            if (param) {
                return new Date(param).toLocaleDateString('en-US')
            }
            return '';
        }
    }
    // {
    //     field: 'AddedBy',
    //     headerName: 'Added By',
    //     type: 'string',
    //     sortable: true,
    //     width: 50
    // },

    // {
    //     field: 'UpdatedBy',
    //     headerName: 'Updated By',
    //     type: 'string',
    //     sortable: true,
    //     width: 50
    // },


];

export default function RabbitList() {
    //const { rabbits } = useRabbits();
    const [rabbits, SetRabbits] = useState()
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const gridHeight = isMobile ? '50vh' : '70vh';
    //custum style on datagrid
    const custumTheme = createTheme({
        palette: {
            DataGrid: {
                headerBg: '#926841',
            }
        },
        components: {
            MuiDataGrid: {
                styleOverrides: {
                    row: {
                        '&:hover': {
                            backgroundColor: '#d2c9bb'
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#d2c9bb'
                        },

                    }
                }
            }
        }
    })
    // const handleRabbitClick = (newRowSelectionModel: GridRowSelectionModel) => {
    //     setRowSelectionModel(newRowSelectionModel);
    //     console.log('new row', newRowSelectionModel);
    // }
    useEffect(() => {

        axios.get('https://localhost:7192/api/rabbits')
            .then(response => SetRabbits(response.data))
    }, [])
    //console.log(rabbits)
    return (
        <Box sx={{ marginTop: '7%', height: gridHeight, display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={custumTheme}>
                <DataGrid
                    rows={rabbits}
                    columns={columns}
                    rowHeight={30}
                    sx={{
                        border: '1px solid #926841',
                        '& .MuiDataGrid-columnHeaders': {
                            color: '#ffffff',
                            borderBottom: '1px solid #ccc',
                            height: 35,
                        },
                        '.Mui-selected': {
                            backgroundColor: '#d2c9bb'
                        }
                    }}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                        columns: {
                            columnVisibilityModel: {
                                id: false,
                            },

                        },
                    }}
                    //disableColumnResize={true}
                    disableColumnMenu={true}
                    pageSizeOptions={[5]}
                    // checkboxSelection
                    disableRowSelectionOnClick
                    rowSelectionModel={rowSelectionModel}
                    onRowSelectionModelChange={(newSelectionModel) => {
                        setRowSelectionModel(newSelectionModel);
                    }}
                />
            </ThemeProvider>
        </Box>
    )
}

