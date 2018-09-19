import { GuestbookModule } from './guestbook.module';

describe('GuestbookModule', () => {
  let guestbookModule: GuestbookModule;

  beforeEach(() => {
    guestbookModule = new GuestbookModule();
  });

  it('should create an instance', () => {
    expect(guestbookModule).toBeTruthy();
  });
});
