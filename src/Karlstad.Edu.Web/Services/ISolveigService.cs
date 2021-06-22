
using System.Collections.Generic;
using System.Threading.Tasks;
using Karlstad.Edu.Web.Models;

namespace Karlstad.Edu.Web.Services
{

    public interface ISolveigService
    {
        ValueTask<List<SolveigItem>> SearchAsync(string query);
    }

}

