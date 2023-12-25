namespace BookStorage.Core.Request
{
    public class BookResponse
    {
        public required Guid Id { get; set; }
        public required string Name { get; set; }
        public string Description { get; set; } = string.Empty;
    }
}