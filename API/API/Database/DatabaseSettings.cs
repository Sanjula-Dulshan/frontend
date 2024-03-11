namespace API.Database
{
    public class DatabaseSettings : IDatabaseSettings
    {
        public string StreamsCollectionName { get; set; } = string.Empty;
    }
}
