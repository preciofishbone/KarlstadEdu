namespace Karlstad.Edu.Web.Models
{
    using System.Collections.Generic;

    public class SolveigResponse
    {
        public int HitsPerPage { get; set; }
        public List<SolveigItem> Results { get; set; }

    }
}