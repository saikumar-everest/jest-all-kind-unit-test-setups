import {FbCommunicationService} from './fb-communication.service';
import {SlackCommunicationService} from './slack-communication.service';
import {TwitterCommunicationService} from './twitter-communication.service';
import {WapCommunicationService} from './wap-communication.service';

export class UserService {
  constructor(
    slackCommunicationService: SlackCommunicationService,
    twitterCommunicationService: TwitterCommunicationService,
    fbCommunicationService: FbCommunicationService,
    wapCommunicationService: WapCommunicationService,
  ) {}

  async superActiveUserId(): Promise<string> {
    // Goes some logic with above services
    return '5';
  }
}
