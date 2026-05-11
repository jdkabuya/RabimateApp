using BusnessLayer.Models;
using System;

namespace DatabaseLayer
{
    public static class DbInitializer
    {
        public static async Task SeedData(RabimateDbContext context)
        {
            if (context.Database.CanConnect())
            {
                if (!context.Cages.Any())
                {
                    var cages = new List<Cage>
                    {
                        new Cage { Id = "0CDF50F4-FB2D-4C02-8C3B-5BF4E95908D8", Code = "C007", IsAvailable =true },
                        new Cage { Id = "2BFE8D2E-AE42-42E2-BB04-AA2ECC2DCF2A", Code = "C003", IsAvailable =true },
                        new Cage { Id = "5F891882-5B81-455B-A0B3-4B88F281560B", Code = "C001", IsAvailable =true },
                        new Cage { Id = "97F2ECEE-62E5-4456-B3D9-D164ED9619E0", Code = "C004", IsAvailable =true },
                        new Cage { Id = "9C0AE3E2-F193-402E-AFCF-134F455C32EF", Code = "C005", IsAvailable =true },
                        new Cage { Id = "AA4402CB-2375-43E3-95BD-2F6553917F8C", Code = "C008", IsAvailable =true },
                        new Cage { Id = "F2F154F0-7289-45BA-B6D3-B0DB7D59F765", Code = "C006", IsAvailable =true },
                        new Cage { Id = "F739CCE7-470C-43C7-9D45-6CE69A39F395", Code = "C002", IsAvailable =true }
                    };
                    context.Cages.AddRange(cages);
                }
                if (!context.Breeds.Any())
                {
                    var breeds = new List<Breed>
                    {
                        new Breed { Id = "817441AF-4B2A-4C43-9F9D-DE94769D95F1", Name = "New Zealand White", Code="NZW" },
                        new Breed { Id = "C450CCC3-ABB6-4763-BEF2-88D5A18E072E", Name = "New Zealand Red", Code="NZR" },
                        new Breed { Id = "ED82F741-3066-419A-B8B0-D670A42C0CF7", Name = "California White", Code="CALI" },
                        new Breed { Id = "F2A436EC-0E42-47EB-886A-F12481E1D754", Name = "Phendula SA", Code="PDLSA" }
                    };
                    context.Breeds.AddRange(breeds);
                }
                if (!context.Genders.Any())
                {
                    new Gender { Id = "3D6001D8-8F36-4A58-9247-A32BB8373F63", Description = "Doe" };
                    new Gender { Id = "605FBEB9-B01B-40A3-8E18-80F3BCB6EA53", Description = "Buck" };
                }
                if(context.Histories.Any())
                {
                    new History { Id = "209436A0-5973-4142-B87D-B0802CE567CE", RabbitId = "15E30AA0-E444-4836-BAD1-726D34157677", CageId = "2BFE8D2E-AE42-42E2-BB04-AA2ECC2DCF2A", MateWith = "94D2A589-E59D-4563-B64C-354D622D6DB3", DateMate = DateTime.Parse("2025-10-12 00:00:00.0000000"), DateLittered = DateTime.Parse("2026-01-10 00:00:00.0000000"), LitterCount = 10, KittenDeadCount = 1, BuckCount = 0, DoeCount = 0, DateAdded = DateTime.Parse("2026-01-13 00:00:00.0000000"), DateUpdated = DateTime.Parse("2026-01-13 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                    new History { Id = "4692045B-7204-43BE-AC6D-F5FCE1B9ED9B", RabbitId = "39FE65FD-0023-42C9-9F3C-848B1D727C6E", CageId = "9C0AE3E2-F193-402E-AFCF-134F455C32EF", MateWith = "26BB5683-8940-4035-B6F6-E6FD38D1B7AA", DateMate = DateTime.Parse("2025-10-12 00:00:00.0000000"), DateLittered = DateTime.Parse("2026-01-11 00:00:00.0000000"), LitterCount = 10, KittenDeadCount = 0, BuckCount = 0, DoeCount = 10, DateAdded = DateTime.Parse("2026-01-13 00:00:00.0000000"), DateUpdated = DateTime.Parse("2026-01-13 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                    new History { Id = "481FAE9C-7B25-45B6-BC99-7609438CB1B1", RabbitId = "442D8919-464C-4073-BC88-D5BA886F24C1", CageId = "F739CCE7-470C-43C7-9D45-6CE69A39F395", MateWith = "26BB5683-8940-4035-B6F6-E6FD38D1B7AA", DateMate = DateTime.Parse("2025-11-27 00:00:00.0000000"), DateLittered = DateTime.Parse("2025-12-28 00:00:00.0000000"), LitterCount = 5, KittenDeadCount = 0, BuckCount = 0, DoeCount = 0, DateAdded = DateTime.Parse("2026-03-02 00:00:00.0000000"), DateUpdated = DateTime.Parse("2026-03-02 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                    new History { Id = "72C5A62B-8566-493D-875F-106E1BFF45A1", RabbitId = "15E30AA0-E444-4836-BAD1-726D34157677", CageId = "2BFE8D2E-AE42-42E2-BB04-AA2ECC2DCF2A", MateWith = "26BB5683-8940-4035-B6F6-E6FD38D1B7AA", DateMate = DateTime.Parse("2025-10-10 00:00:00.0000000"), DateLittered = DateTime.Parse("2025-11-12 00:00:00.0000000"), LitterCount = 9, KittenDeadCount = 1, BuckCount = 1, DoeCount = 7, DateAdded = DateTime.Parse("2025-11-03 00:00:00.0000000"), DateUpdated = DateTime.Parse("2025-11-03 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                    new History { Id = "750B0F48-4B25-4768-A59E-3C0AD6B0C4BA", RabbitId = "39FE65FD-0023-42C9-9F3C-848B1D727C6E", CageId = "9C0AE3E2-F193-402E-AFCF-134F455C32EF", MateWith = "26BB5683-8940-4035-B6F6-E6FD38D1B7AA", DateMate = DateTime.Parse("2025-10-10 00:00:00.0000000"), DateLittered = DateTime.Parse("2025-11-13 00:00:00.0000000"), LitterCount = 9, KittenDeadCount = 0, BuckCount = 0, DoeCount = 9, DateAdded = DateTime.Parse("2025-11-03 00:00:00.0000000"), DateUpdated = DateTime.Parse("2025-11-03 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                    new History { Id = "76A0AD5A-6A9C-4DD0-AE56-2D77A6CA4187", RabbitId = "15E30AA0-E444-4836-BAD1-726D34157677", CageId = "2BFE8D2E-AE42-42E2-BB04-AA2ECC2DCF2A", MateWith = "94D2A589-E59D-4563-B64C-354D622D6DB3", DateMate = DateTime.Parse("2026-02-23 00:00:00.0000000"), DateLittered = DateTime.MinValue, LitterCount = 0, KittenDeadCount = 0, BuckCount = 0, DoeCount = 0, DateAdded = DateTime.Parse("2026-03-02 00:00:00.0000000"), DateUpdated = DateTime.Parse("2026-03-02 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                    new History { Id = "9BCB70F5-A4D2-45DC-BB42-74CB4D5AD1F2", RabbitId = "442D8919-464C-4073-BC88-D5BA886F24C1", CageId = "F739CCE7-470C-43C7-9D45-6CE69A39F395", MateWith = "26BB5683-8940-4035-B6F6-E6FD38D1B7AA", DateMate = DateTime.Parse("2026-02-17 00:00:00.0000000"), DateLittered = DateTime.MinValue, LitterCount = 0, KittenDeadCount = 0, BuckCount = 0, DoeCount = 0, DateAdded = DateTime.Parse("2026-03-02 00:00:00.0000000"), DateUpdated = DateTime.Parse("2026-03-02 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                    new History { Id = "B6E29E96-5F57-4B78-8A7E-862A3FD59F3E", RabbitId = "56BA4187-A765-4B8F-B533-9485BF9E5B42", CageId = "97F2ECEE-62E5-4456-B3D9-D164ED9619E0", MateWith = "26BB5683-8940-4035-B6F6-E6FD38D1B7AA", DateMate = DateTime.Parse("2025-12-02 00:00:00.0000000"), DateLittered = DateTime.Parse("2026-01-02 00:00:00.0000000"), LitterCount = 4, KittenDeadCount = 0, BuckCount = 0, DoeCount = 0, DateAdded = DateTime.Parse("2026-03-02 00:00:00.0000000"), DateUpdated = DateTime.Parse("2026-03-02 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                    new History { Id = "BDF3F8B1-040F-4407-995D-84A74B29E4CB", RabbitId = "56BA4187-A765-4B8F-B533-9485BF9E5B42", CageId = "97F2ECEE-62E5-4456-B3D9-D164ED9619E0", MateWith = "26BB5683-8940-4035-B6F6-E6FD38D1B7AA", DateMate = DateTime.Parse("2026-02-17 00:00:00.0000000"), DateLittered = DateTime.MinValue, LitterCount = 0, KittenDeadCount = 0, BuckCount = 0, DoeCount = 0, DateAdded = DateTime.Parse("2026-03-02 00:00:00.0000000"), DateUpdated = DateTime.Parse("2026-03-02 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                    new History { Id = "CD87D4FD-FDA3-4E1A-A14A-81F078C5CF0D", RabbitId = "39FE65FD-0023-42C9-9F3C-848B1D727C6E", CageId = "9C0AE3E2-F193-402E-AFCF-134F455C32EF", MateWith = "26BB5683-8940-4035-B6F6-E6FD38D1B7AA", DateMate = DateTime.Parse("2026-02-23 00:00:00.0000000"), DateLittered = DateTime.MinValue, LitterCount = 0, KittenDeadCount = 0, BuckCount = 0, DoeCount = 0, DateAdded = DateTime.Parse("2026-03-02 00:00:00.0000000"), DateUpdated = DateTime.Parse("2026-03-02 00:00:00.0000000"), AddedBy = "e2632e63-a4da-409a-b285-e099561213a1", UpdatedBy = "e2632e63-a4da-409a-b285-e099561213a1" };
                }
                if(context.Rabbits.Any())
                {
                    new Rabbit { Id = "15E30AA0-E444-4836-BAD1-726D34157677", Code = null, CageId = "2BFE8D2E-AE42-42E2-BB04-AA2ECC2DCF2A", GenderId = "3D6001D8-8F36-4A58-9247-A32BB8373F63", DOB = DateTime.Parse("2025 - 05 - 20 00:00:00.0000000"), Imported = true, BreedId = "C450CCC3-ABB6-4763-BEF2-88D5A18E072E", DateAdded = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000"), DateUpdated = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000") };
                    new Rabbit { Id = "26BB5683-8940-4035-B6F6-E6FD38D1B7AA", Code = null, CageId = "AA4402CB-2375-43E3-95BD-2F6553917F8C", GenderId = "605FBEB9-B01B-40A3-8E18-80F3BCB6EA53", DOB = DateTime.Parse("2025 - 05 - 20 00:00:00.0000000"), Imported = true, BreedId = "F2A436EC-0E42-47EB-886A-F12481E1D754", DateAdded = DateTime.Parse("2025 - 11 - 03 13:23:18.0066667"), DateUpdated = DateTime.Parse("2025 - 11 - 03 13:23:18.0066667") };
                    new Rabbit { Id = "39FE65FD-0023-42C9-9F3C-848B1D727C6E", Code = null, CageId = "9C0AE3E2-F193-402E-AFCF-134F455C32EF", GenderId = "3D6001D8-8F36-4A58-9247-A32BB8373F63", DOB = DateTime.Parse("2025 - 05 - 20 00:00:00.0000000"), Imported = true, BreedId = "F2A436EC-0E42-47EB-886A-F12481E1D754", DateAdded = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000"), DateUpdated = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000") };
                    new Rabbit { Id = "442D8919-464C-4073-BC88-D5BA886F24C1", Code = null, CageId = "F739CCE7-470C-43C7-9D45-6CE69A39F395", GenderId = "3D6001D8-8F36-4A58-9247-A32BB8373F63", DOB = DateTime.Parse("2025 - 05 - 20 00:00:00.0000000"), Imported = true, BreedId = "F2A436EC-0E42-47EB-886A-F12481E1D754", DateAdded = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000"), DateUpdated = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000") };
                    new Rabbit { Id = "56BA4187-A765-4B8F-B533-9485BF9E5B42", Code = null, CageId = "97F2ECEE-62E5-4456-B3D9-D164ED9619E0", GenderId = "3D6001D8-8F36-4A58-9247-A32BB8373F63", DOB = DateTime.Parse("2025 - 06 - 20 00:00:00.0000000"), Imported = true, BreedId = "F2A436EC-0E42-47EB-886A-F12481E1D754", DateAdded = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000"), DateUpdated = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000") };
                    new Rabbit { Id = "94D2A589-E59D-4563-B64C-354D622D6DB3", Code = null, CageId = "5F891882-5B81-455B-A0B3-4B88F281560B", GenderId = "605FBEB9-B01B-40A3-8E18-80F3BCB6EA53", DOB = DateTime.Parse("2025 - 05 - 20 00:00:00.0000000"), Imported = true, BreedId = "C450CCC3-ABB6-4763-BEF2-88D5A18E072E", DateAdded = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000"), DateUpdated = DateTime.Parse("2026 - 01 - 08 19:45:35.4100000") };
                }
            }
            await context.SaveChangesAsync();
        }
        
    }
}
