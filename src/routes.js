/**
 * Contains all application endpoints
 */

import TestController from './controllers/TestController';
import WatsonController from './controllers/WatsonController';

export default {
  '/test': {
    get: {
      method: TestController.testMethod,
      public: true,
    },
  },
  '/translate': {
    get: {
      method: WatsonController.translateMethod,
      public: true,
    },
  },
  '/history': {
    get: {
      method: WatsonController.historyMethod,
      public: true,
    },
  },
};
