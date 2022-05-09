import { Test, TestingModule } from "@nestjs/testing";
import { EmailService } from "./email.service";




class emailServiceMock{
    findEmail(id:number){
        return{
            id: 1,
            username:'habib',
            email:'habib@gmail.com'
        }
    }
}
    describe('EmailService',() =>  {
        let app: TestingModule;
        let emailService: EmailService;
       
        beforeAll(async () => {
          const EmailServiceProvider = {
            provide: EmailService,
            useClass: emailServiceMock,
          };
          app = await Test.createTestingModule({
            providers: [EmailService, EmailServiceProvider],
          }).compile();
          emailService = app.get<EmailService>(EmailService);
        });

        describe('', () => {
            it('should get username and email', async () => {
              const expectedUser = {
                //   id: expect.any(Number),
                  id: 1,
                  username:'habib',
                  email: 'habib@gmail.com'
              };
              const user = await emailService.findEmail(1);
         
              expect(user).toEqual(expectedUser);
            });
          });
        
        })