using Microsoft.EntityFrameworkCore;
using SpotifyApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpotifyApi
{
    public class DataBaseContext: DbContext
    {
        public DataBaseContext()
        {

        }
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.;Database=spotify;Trusted_Connection=True;");
        }
    }
}
