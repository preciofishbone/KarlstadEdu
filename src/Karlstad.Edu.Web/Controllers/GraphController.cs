
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Omnia.Fx.Http.Preconfigured.HttpClients;
using Omnia.Fx.Http.Preconfigured.HttpClients.Generic;

public class GraphController : ControllerBase
{
    private readonly IConfiguredHttpClient<Office365GraphServiceApi> _graphClient;

    public GraphController(IConfiguredHttpClient<Office365GraphServiceApi> graphClient){
        this._graphClient = graphClient;
    }

    [HttpGet, Route("/api/qraph/get")]
    public async Task<string> GetGraph()
    {
        var res = await this._graphClient.GetAsync("/v1.0/me");
        var content = await res.Content.ReadAsStringAsync();
        return content;
    }


}