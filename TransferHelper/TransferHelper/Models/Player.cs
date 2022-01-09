    namespace TransferHelper.Models
{
    public class Player
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public DateTime Birthdate { get; set; }
        public Guid PositionId { get; set; }
        public PlayerPosition? Position { get; set; }
    }
}
