using Microsoft.EntityFrameworkCore;
using TransferHelper.Models;

namespace TransferHelper.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Player> Players { get; set; }
        public DbSet<PlayerPosition> PlayerPositions { get; set; }
    }
}
