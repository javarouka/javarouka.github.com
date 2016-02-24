var assert = require('chai').assert,
    myCoolLibrary = require('./my.cool.library');

describe('## MY COOL LIBRARY TEST ##', function() {

    describe('truthly()', function () {

        it('인자가 truth 할 경우 true를 반환한다. ', function () {

            assert.isTrue(myCoolLibrary.truthly(true), '완벽해!');
            assert.isTrue(!myCoolLibrary.truthly(false), '완벽해!');
            assert.isTrue(!myCoolLibrary.truthly(0), '완벽해!');
            assert.isTrue(!myCoolLibrary.truthly(''), '완벽해!');
            assert.isTrue(myCoolLibrary.truthly('hello'), '완벽해!');
            assert.isTrue(myCoolLibrary.truthly(3), '완벽해!');
            assert.isTrue(myCoolLibrary.truthly(new Date()), '완벽해!');
        });
    });

    describe('doWhen()', function () {

        it('첫번째 인자가 true로 판단되면 두번째 인자를 실행한다. ', function () {
            var ok = false;
            myCoolLibrary.doWhen(1 === 1, function() {
                ok = true;
            });
            assert.isTrue(ok, '실행됐어!');

        });

        it('첫번째 인자가 false 로 판단되면 두번째 인자를 실행하지 않는다. ', function () {
            var ok = false;
            myCoolLibrary.doWhen(1 !== 1, function() {
                ok = true;
            });

            assert.isTrue(!ok, '실행되지 않았어!');
        });
    });
});