# lib-js-super-simple-template-engine
10行代码的超级简单js模板引擎

# how to use

```html
<script src="t.js"></script>

<script id="testTemplate" type="text/template">
			<ul>
			<%for(good of goods){%>
				<li>
				{{good}}
				</li>	
			<%}%>
			</ul>
			
</script>
		
<script>
  		let html=t("testTemplate",{
				goods:["a","b","c"]
			});
			document.body.innerHTML=html;
<script>
```
