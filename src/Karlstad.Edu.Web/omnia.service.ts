import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("7433f149-a76b-4d30-9d14-503dc66d5de8"), "Karlstad.Edu.Web")
    .registerService({ description: "Description of Karlstad.Edu.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("4d12232a-5c81-4610-9775-06c43b1598df"),
                minChunks: 2
            }
        }
    });
    
   