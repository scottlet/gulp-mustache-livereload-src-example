/*global describe, xit */

import { spy } from 'sinon';
import { expect } from 'chai';

describe('Routes', () => {
  describe('GET Index', () => {
    xit('should respond', () => {
      const res = {};
      const ourSpy = spy();

      res.render = (path, opts) => {
        spy();
        expect(opts.testableProperty).to.equal(true);
        expect(opts.title).to.equal('The Test Page');
        expect(opts.pageTitle).to.equal('Welcome!');
        expect(opts.helpers.capitalise('Enjoy!')).to.equal('ENJOY!');
        expect(ourSpy.calledOnce).to.equal(true);
      };
      //index(req, res);
    });
  });
});
