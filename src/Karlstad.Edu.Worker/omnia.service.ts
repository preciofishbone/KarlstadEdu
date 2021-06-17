import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("fa208d2f-f77a-44f5-9a52-b07f4107a883"), "Karlstad.Edu.Worker")
    .registerService({ description: "Description of Karlstad.Edu.Worker" })
    .AsWorker();
    
   