import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';
import { FontAwesomeIcon } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("913b9f0d-e9e2-4f73-919e-505ac6cc7ac7"), "GraphExample")
    .registerWebComponent({
        elementName: "krl-graph-example",
        entryPoint: "./GraphExample.jsx"
    })
    .withDefinition({
        title: "GraphExample", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
        description: "GraphExample", // You can use localization, i.e., $Localize:Namespace.Something.Description;
        icon: new FontAwesomeIcon("far fa-smile-beam")
    })
    .registerOmniaBlock({
        category: "GraphExample", // You can use localization, i.e., $Localize:Namespace.Something.Category;
        
        //which layout provider can use this block. 
        //layoutDependencyProviders: ["wcm"] //i.e. only WCM layout can use this block 
    });

Composer
.registerManifest(new Guid("5aef1e00-8e8b-4965-9c46-2c36f16d5bfd"), "GraphExample.settings")
.registerWebComponent({
    elementName: "krl-graph-example-settings",
    entryPoint: "./GraphExampleSettings.jsx"
})