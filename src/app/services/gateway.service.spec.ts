import { TestBed, inject,fakeAsync,tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, Http, BaseRequestOptions,Response,ResponseOptions } from '@angular/http';
import { Gateway } from './gateway.service';
import { async } from '@angular/core/testing';

describe('Gateway', () => {

  let gateway: Gateway;
  let backend: MockBackend;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          HttpModule
      ],
      providers: [
        Gateway,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    backend = TestBed.get(MockBackend);
    gateway = TestBed.get(Gateway);
  });

  it('should be created', inject([Gateway], (service: Gateway) => {
    expect(service).toBeTruthy();
  }));


  it('should return an http request and imgsrc', fakeAsync(() => {
    //fake data used for http request
    let fakeResponse = {
      "status": "success",
      "data": {
        "name": "One for One",
        "text": "Send 1 monster from your hand to the Graveyard; Special Summon 1 Level 1 monster from your hand or Deck.",
        "card_type": "spell",
        "type": null,
        "family": null,
        "atk": null,
        "def": null,
        "level": null,
        "property": "Normal"
        }
      };

      //response from fake data
      backend.connections.subscribe(connection => {
        connection.mockRespond(new Response(<ResponseOptions>{
          body: JSON.stringify(fakeResponse)
        }));
      });

      gateway.getCardData("One for One");
      tick();

      expect(gateway.results.name).toBe("One for One");
      expect(gateway.results.text).toBe("Send 1 monster from your hand to the Graveyard; Special Summon 1 Level 1 monster from your hand or Deck.");
      expect(gateway.imgsrc).toBe("http://52.57.88.137/api/card_image/One for One");

    }));


    it("should return a http action",async(()=>{
      let url = "http://52.57.88.137/api/card_data/{cardName}";
      expect(gateway["makeURL"]("/api/card_data/{cardName}")).toBe(url);
    }));

});
