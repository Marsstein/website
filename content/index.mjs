// Master index that combines all content modules
import main from './main/index.mjs';
import compliance from './compliance/index.mjs';
import assessmentCenter from './assessment-center/index.mjs';
import wissen from './wissen/index.mjs';

export default {
  main,
  compliance,
  'assessment-center': assessmentCenter,
  wissen
};