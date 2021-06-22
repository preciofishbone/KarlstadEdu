
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace Karlstad.Edu.Web.Services
{

    internal class SolveigService : ISolveigService
    {
        private readonly HttpClient _httpClient;

        public SolveigService(HttpClient httpClient)
        {
            this._httpClient = httpClient;
        }

        public async ValueTask<string> Search(string query)
        {


            return "result";
        }
    }
}