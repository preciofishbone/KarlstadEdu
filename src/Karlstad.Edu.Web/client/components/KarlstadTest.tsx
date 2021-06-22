import { Component } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper } from "@omnia/fx";
import { StyleFlow, VueComponentBase, BlockSettingsReader } from '@omnia/fx/ux';
import { KarlstadTestStyles } from './KarlstadTest.css';
import { KarlstadTestBlockSettings } from './KarlstadTestSettings';
import {Inject, HttpClient, HttpClientConstructor}  from '@omnia/fx';

@Component
export default class KarlstadTest extends VueComponentBase implements IWebComponentInstance {
    

    private KarlstadTestClasses = StyleFlow.use(KarlstadTestStyles);
    private demoContent: string = "";
    
    @BlockSettingsReader<KarlstadTestBlockSettings>({
        defaultValue: { title: 'Hello Karlstad',description:'default beskrivning'},
        editElement: "kstad-omnia-test-settings"
    })
    protected settings: KarlstadTestBlockSettings;


    @Inject<HttpClientConstructor>(HttpClient, {
        configPromise: HttpClient.createOmniaServiceRequestConfig('7433f149-a76b-4d30-9d14-503dc66d5de8')
    }) private httpClient: HttpClient


    async mounted() {
        WebComponentBootstrapper.registerElementInstance(this, this.$el);

        let res = await this.httpClient.get('/api/demo');
        this.demoContent = res.data;
    }

    render(h) {
        return (
            <div class={this.KarlstadTestClasses.container}>
                {this.settings.title}
                {this.settings.description}
                {this.demoContent}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, KarlstadTest);
});