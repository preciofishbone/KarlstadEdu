
using Microsoft.AspNetCore.Mvc;
using Omnia.Fx.Http.Preconfigured.HttpClients;
using Omnia.Fx.Http.Preconfigured.HttpClients.Generic;

public class DemoController : ControllerBase
{

    [HttpGet, Route("/api/demo")]
    public string GetDemoContent()
    {
        return "This is some demo content";
    }


}