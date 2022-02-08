import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//handles requests and return responses
@Controller('cats')
//esse decorator define que essa classe é um controller o parâmetro "cats" diz em qual rota esse controller está
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  //para mudar o status adicione um @HttpCode(204) aqui
  //esse @get() diz para o nest criar um handler para esse endpoint
  //pode receber uma string também e será concatenada à string principal
  //esse decorator executa o método findAll()
  findAll(): string {
    //se quiser usar os métodos específicos de uma lib adicione o decorator:
    // findAll(@Res() response)
    // se quiser ter acesso ao método request adicione o decorator:
    // @Req() request: Request (default é a do express)
    //esse método será executado e a resposta dele será associada ao response
    // se esse método retornar um array ou objeto será convertido em JSON
    // se retornar uma string ou algo do tipo só ira mandar de volta
    // status para get 200
    // status para post 201
    // pode retornar html
    return '<h1>Bom dia!</h1>';
  }
}
