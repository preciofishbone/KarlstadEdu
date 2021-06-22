
using Microsoft.AspNetCore.Mvc;
using Omnia.Fx.Http.Preconfigured.HttpClients;
using Omnia.Fx.Http.Preconfigured.HttpClients.Generic;

public class SolveigController : ControllerBase
{

    [HttpGet, Route("/api/solveig")]
    public string Search(string query){
        return ""; 
    }
}