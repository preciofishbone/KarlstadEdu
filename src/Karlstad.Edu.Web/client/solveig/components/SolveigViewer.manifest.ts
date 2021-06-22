import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';
import { FontAwesomeIcon } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("b9debf1a-ac4b-4476-8e90-f2cbb7c32f5d"), "SolveigViewer")
    .registerWebComponent({
        elementName: "klstd-solveig-viewer",
        entryPoint: "./SolveigViewer.jsx"
    })
    .withDefinition({
        title: "SolveigViewer", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
        description: "SolveigViewer", // You can use localization, i.e., $Localize:Namespace.Something.Description;
        icon: new FontAwesomeIcon("far fa-smile-beam")
    })
    .registerOmniaBlock({
        category: "SolveigViewer", // You can use localization, i.e., $Localize:Namespace.Something.Category;
        
        //which layout provider can use this block. 
        //layoutDependencyProviders: ["wcm"] //i.e. only WCM layout can use this block 
    });

Composer
.registerManifest(new Guid("630085ed-d805-49c5-bab1-0c13820b2a48"), "SolveigViewer.settings")
.registerWebComponent({
    elementName: "klstd-solveig-viewer-settings",
    entryPoint: "./SolveigViewerSettings.jsx"
})