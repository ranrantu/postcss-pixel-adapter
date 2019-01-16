import * as postcss from 'postcss';

export default postcss.plugin('postcss-pixel-adapter', (options = {}) => {
    return function (root, result) {
      root.walkRules(rule =>{
        let addRule = false;
        let newDecls = [];
        rule.walkDecls(/^border-?/, line => {
        	if (/^1px/.test(line.value)) {
            	addRule = true;
        		newDecls.push(postcss.decl({ prop: line.prop, value: line.value.replace(/^(1)px/, '0.5') }));
        	}
     	});
        if (addRule) {
        	const newRule = postcss.rule({ selector: '.hairlines ' + rule.selector });
          	newRule.append(newDecls);
          	root.append(newRule);
        }
      });
    };
});
