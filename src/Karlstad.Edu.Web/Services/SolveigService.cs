
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Karlstad.Edu.Web.Models;

namespace Karlstad.Edu.Web.Services
{

    internal class SolveigService : ISolveigService
    {
        private readonly HttpClient _httpClient;

        public SolveigService(HttpClient httpClient)
        {
            this._httpClient = httpClient;
        }

        public async ValueTask<List<SolveigItem>> SearchAsync(string query)
        {

            var result = new List<SolveigItem>();

            var resp = await this._httpClient.GetAsync($"https://karlstad.infocaption.com/API/lucene/enduser/guidesearch?searchQuery={query}");

            result = (await resp.Content.ReadAsJsonAsync<SolveigResponse>()).Results;
            //https://karlstad.infocaption.com/API/lucene/enduser/guidesearch?searchQuery=
            return result;
        }
    }
}