
using System.Collections.Generic;
using System.Threading.Tasks;
using Karlstad.Edu.Web.Models;
using Karlstad.Edu.Web.Services;
using Microsoft.AspNetCore.Mvc;
using Omnia.Fx.Http.Preconfigured.HttpClients;
using Omnia.Fx.Http.Preconfigured.HttpClients.Generic;

public class SolveigController : ControllerBase
{
    private readonly ISolveigService solveigService;

    public SolveigController(ISolveigService solveigService)
    {
        this.solveigService = solveigService;
    }

    [HttpGet, Route("/api/solveig/search")]
    public async Task<List<SolveigItem>> Search([FromQuery]string query){

        return await this.solveigService.SearchAsync(query);

    }
}