import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';
import { FontAwesomeIcon } from '@omnia/fx-models';

Composer
    .registerManifest(new Guid("3ce40abd-8b38-4ad9-990c-83dcfd2dec94"), "KarlstadTest")
    .registerWebComponent({
        elementName: "kstad-omnia-test",
        entryPoint: "./KarlstadTest.jsx"
    })
    .withDefinition({
        title: "KarlstadTest", // You can use localization, i.e., $Localize:Namespace.Something.Title; 
        description: "KarlstadTest", // You can use localization, i.e., $Localize:Namespace.Something.Description;
        icon: new FontAwesomeIcon("far fa-smile-beam")
    })
    .registerOmniaBlock({
        category: "KarlstadTest", // You can use localization, i.e., $Localize:Namespace.Something.Category;
        
        //which layout provider can use this block. 
        //layoutDependencyProviders: ["wcm"] //i.e. only WCM layout can use this block 
    });

Composer
.registerManifest(new Guid("82a0d005-266d-41f1-85f8-c46362aac06f"), "KarlstadTest.settings")
.registerWebComponent({
    elementName: "kstad-omnia-test-settings",
    entryPoint: "./KarlstadTestSettings.jsx"
})