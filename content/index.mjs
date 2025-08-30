// Master index that combines all content modules
import main from './main/index.mjs';
import branchen from './branchen/index.mjs';
import tools from './tools/index.mjs';
import compliance from './compliance/index.mjs';
import assessmentCenter from './assessment-center/index.mjs';
import wissen from './wissen/index.mjs';

export default {
  main,
  branchen,
  tools,
  compliance,
  'assessment-center': assessmentCenter,
  wissen
};