
using API.Database;
using MongoDB.Driver;

namespace API.Services
{
    public class StreamService : IStreamService
    {

        private readonly IMongoCollection<Stream> _streams;
        private readonly IStreamService streamService;
        public StreamService(IDatabaseSettings settings, IMongoClient mongoClient, IStreamService streamService)
        {
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _streams = database.GetCollection<Stream>(settings.StreamsCollectionName);

            this.streamService = streamService;

        }
        public List<Stream> Get()
        {
           return _streams.Find(stream=>true).ToList();
        }
    }
}
