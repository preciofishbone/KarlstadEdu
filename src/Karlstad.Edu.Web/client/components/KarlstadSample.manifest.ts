import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';
import { FontAwesomeIcon } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("b02f8e3d-e996-4399-8f38-77c32b11149c"), "KarlstadSample")
    .registerWebComponent({
        elementName: "kstad-omnia-sample",
        entryPoint: "./KarlstadSample.jsx"
    })
    .withDefinition({
        title: "KarlstadSample", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
        description: "KarlstadSample", // You can use localization, i.e., $Localize:Namespace.Something.Description;
        icon: new FontAwesomeIcon("far fa-smile-beam")
    })
    .registerOmniaBlock({
        category: "KarlstadSample", // You can use localization, i.e., $Localize:Namespace.Something.Category;
        
        //which layout provider can use this block. 
        //layoutDependencyProviders: ["wcm"] //i.e. only WCM layout can use this block 
    });

Composer
.registerManifest(new Guid("6e30be7e-fcbd-4901-a2c2-361379a4611b"), "KarlstadSample.settings")
.registerWebComponent({
    elementName: "kstad-omnia-sample-settings",
    entryPoint: "./KarlstadSampleSettings.jsx"
})