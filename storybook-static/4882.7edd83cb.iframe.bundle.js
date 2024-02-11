/*! For license information please see 4882.7edd83cb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_webriq_pagebuilder_site_template_default=self.webpackChunk_webriq_pagebuilder_site_template_default||[]).push([[4882],{"./node_modules/@portabletext/react/dist/react-portable-text.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{YI:()=>PortableText});var console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function isPortableTextSpan(node){return"span"===node._type&&"text"in node&&"string"==typeof node.text&&(void 0===node.marks||Array.isArray(node.marks)&&node.marks.every((mark=>"string"==typeof mark)))}function isPortableTextBlock(node){return"string"==typeof node._type&&"@"!==node._type[0]&&(!("markDefs"in node)||!node.markDefs||Array.isArray(node.markDefs)&&node.markDefs.every((def=>"string"==typeof def._key)))&&"children"in node&&Array.isArray(node.children)&&node.children.every((child=>"object"==typeof child&&"_type"in child))}function isPortableTextListItemBlock(block){return isPortableTextBlock(block)&&"listItem"in block&&"string"==typeof block.listItem&&(void 0===block.level||"number"==typeof block.level)}function isPortableTextToolkitList(block){return"@list"===block._type}function isPortableTextToolkitSpan(span){return"@span"===span._type}function isPortableTextToolkitTextNode(node){return"@text"===node._type}const knownDecorators=["strong","em","code","underline","strike-through"];function sortMarksByOccurences(span,index,blockChildren){if(!isPortableTextSpan(span)||!span.marks)return[];if(!span.marks.length)return[];const marks=span.marks.slice(),occurences={};return marks.forEach((mark=>{occurences[mark]=1;for(let siblingIndex=index+1;siblingIndex<blockChildren.length;siblingIndex++){const sibling=blockChildren[siblingIndex];if(!(sibling&&isPortableTextSpan(sibling)&&Array.isArray(sibling.marks)&&-1!==sibling.marks.indexOf(mark)))break;occurences[mark]++}})),marks.sort(((markA,markB)=>function sortMarks(occurences,markA,markB){const aOccurences=occurences[markA],bOccurences=occurences[markB];if(aOccurences!==bOccurences)return bOccurences-aOccurences;const aKnownPos=knownDecorators.indexOf(markA),bKnownPos=knownDecorators.indexOf(markB);if(aKnownPos!==bKnownPos)return aKnownPos-bKnownPos;return markA.localeCompare(markB)}(occurences,markA,markB)))}function blockMatchesList(block,list){return(block.level||1)===list.level&&block.listItem===list.listItem}function listFromBlock(block,index,mode){return{_type:"@list",_key:"".concat(block._key||"".concat(index),"-parent"),mode,level:block.level||1,listItem:block.listItem,children:[block]}}function findListMatching(rootNode,matching){const level=matching.level||1,style=matching.listItem||"normal",filterOnType="string"==typeof matching.listItem;if(isPortableTextToolkitList(rootNode)&&(rootNode.level||1)===level&&filterOnType&&(rootNode.listItem||"normal")===style)return rootNode;if(!("children"in rootNode))return;const node=rootNode.children[rootNode.children.length-1];return node&&!isPortableTextSpan(node)?findListMatching(node,matching):void 0}function spanToPlainText(span){let text="";return span.children.forEach((current=>{isPortableTextToolkitTextNode(current)?text+=current.text:isPortableTextToolkitSpan(current)&&(text+=spanToPlainText(current))})),text}const LIST_NEST_MODE_HTML="html";var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_portable_text_esm_console=__webpack_require__("./node_modules/console-browserify/index.js");const _excluded=["block","list","listItem","marks","types"],_excluded2=["listItem"],_excluded3=["_key"];function react_portable_text_esm_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function react_portable_text_esm_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?react_portable_text_esm_ownKeys(Object(t),!0).forEach((function(r){react_portable_text_esm_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):react_portable_text_esm_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function react_portable_text_esm_defineProperty(obj,key,value){return(key=function react_portable_text_esm_toPropertyKey(arg){var key=function react_portable_text_esm_toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function mergeDeeply(parent,overrides,key){const override=overrides[key],parentVal=parent[key];return"function"==typeof override||override&&"function"==typeof parentVal?override:override?react_portable_text_esm_objectSpread(react_portable_text_esm_objectSpread({},parentVal),override):parentVal}const underlineStyle={textDecoration:"underline"},getTemplate=(type,prop)=>"[@portabletext/react] Unknown ".concat(type,", specify a component for it in the `components.").concat(prop,"` prop"),unknownTypeWarning=typeName=>getTemplate('block type "'.concat(typeName,'"'),"types");function printWarning(message){react_portable_text_esm_console.warn(message)}const react_portable_text_esm_hidden={display:"none"},defaultComponents={types:{},block:{normal:_ref15=>{let{children}=_ref15;return(0,jsx_runtime.jsx)("p",{children})},blockquote:_ref16=>{let{children}=_ref16;return(0,jsx_runtime.jsx)("blockquote",{children})},h1:_ref17=>{let{children}=_ref17;return(0,jsx_runtime.jsx)("h1",{children})},h2:_ref18=>{let{children}=_ref18;return(0,jsx_runtime.jsx)("h2",{children})},h3:_ref19=>{let{children}=_ref19;return(0,jsx_runtime.jsx)("h3",{children})},h4:_ref20=>{let{children}=_ref20;return(0,jsx_runtime.jsx)("h4",{children})},h5:_ref21=>{let{children}=_ref21;return(0,jsx_runtime.jsx)("h5",{children})},h6:_ref22=>{let{children}=_ref22;return(0,jsx_runtime.jsx)("h6",{children})}},marks:{em:_ref2=>{let{children}=_ref2;return(0,jsx_runtime.jsx)("em",{children})},strong:_ref3=>{let{children}=_ref3;return(0,jsx_runtime.jsx)("strong",{children})},code:_ref4=>{let{children}=_ref4;return(0,jsx_runtime.jsx)("code",{children})},underline:_ref5=>{let{children}=_ref5;return(0,jsx_runtime.jsx)("span",{style:underlineStyle,children})},"strike-through":_ref6=>{let{children}=_ref6;return(0,jsx_runtime.jsx)("del",{children})},link:_ref=>{let{children,value}=_ref;return(0,jsx_runtime.jsx)("a",{href:null==value?void 0:value.href,children})}},list:{number:_ref7=>{let{children}=_ref7;return(0,jsx_runtime.jsx)("ol",{children})},bullet:_ref8=>{let{children}=_ref8;return(0,jsx_runtime.jsx)("ul",{children})}},listItem:_ref9=>{let{children}=_ref9;return(0,jsx_runtime.jsx)("li",{children})},hardBreak:()=>(0,jsx_runtime.jsx)("br",{}),unknownType:_ref10=>{let{value,isInline}=_ref10;const warning=unknownTypeWarning(value._type);return isInline?(0,jsx_runtime.jsx)("span",{style:react_portable_text_esm_hidden,children:warning}):(0,jsx_runtime.jsx)("div",{style:react_portable_text_esm_hidden,children:warning})},unknownMark:_ref11=>{let{markType,children}=_ref11;return(0,jsx_runtime.jsx)("span",{className:"unknown__pt__mark__".concat(markType),children})},unknownList:_ref13=>{let{children}=_ref13;return(0,jsx_runtime.jsx)("ul",{children})},unknownListItem:_ref14=>{let{children}=_ref14;return(0,jsx_runtime.jsx)("li",{children})},unknownBlockStyle:_ref12=>{let{children}=_ref12;return(0,jsx_runtime.jsx)("p",{children})}};function PortableText(_ref23){let{value:input,components:componentOverrides,listNestingMode,onMissingComponent:missingComponentHandler=printWarning}=_ref23;const handleMissingComponent=missingComponentHandler||noop,nested=function nestLists(blocks,mode){const tree=[];let currentList;for(let i=0;i<blocks.length;i++){const block=blocks[i];if(block)if(isPortableTextListItemBlock(block))if(currentList)if(blockMatchesList(block,currentList))currentList.children.push(block);else if((block.level||1)>currentList.level){const newList=listFromBlock(block,i,mode);if("html"===mode){const lastListItem=currentList.children[currentList.children.length-1],newLastChild=_objectSpread(_objectSpread({},lastListItem),{},{children:[...lastListItem.children,newList]});currentList.children[currentList.children.length-1]=newLastChild}else currentList.children.push(newList);currentList=newList}else if((block.level||1)<currentList.level){const matchingBranch=tree[tree.length-1],match=matchingBranch&&findListMatching(matchingBranch,block);if(match){currentList=match,currentList.children.push(block);continue}currentList=listFromBlock(block,i,mode),tree.push(currentList)}else if(block.listItem===currentList.listItem)console.warn("Unknown state encountered for block",block),tree.push(block);else{const matchingBranch=tree[tree.length-1],match=matchingBranch&&findListMatching(matchingBranch,{level:block.level||1});if(match&&match.listItem===block.listItem){currentList=match,currentList.children.push(block);continue}currentList=listFromBlock(block,i,mode),tree.push(currentList)}else currentList=listFromBlock(block,i,mode),tree.push(currentList);else tree.push(block),currentList=void 0}return tree}(Array.isArray(input)?input:[input],listNestingMode||LIST_NEST_MODE_HTML),components=(0,react.useMemo)((()=>componentOverrides?function mergeComponents(parent,overrides){const{block,list,listItem,marks,types}=overrides,rest=_objectWithoutProperties(overrides,_excluded);return react_portable_text_esm_objectSpread(react_portable_text_esm_objectSpread({},parent),{},{block:mergeDeeply(parent,overrides,"block"),list:mergeDeeply(parent,overrides,"list"),listItem:mergeDeeply(parent,overrides,"listItem"),marks:mergeDeeply(parent,overrides,"marks"),types:mergeDeeply(parent,overrides,"types")},rest)}(defaultComponents,componentOverrides):defaultComponents),[componentOverrides]),renderNode=(0,react.useMemo)((()=>getNodeRenderer(components,handleMissingComponent)),[components,handleMissingComponent]),rendered=nested.map(((node,index)=>renderNode({node,index,isInline:!1,renderNode})));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:rendered})}const getNodeRenderer=(components,handleMissingComponent)=>{function renderNode(options){const{node,index,isInline}=options,key=node._key||"node-".concat(index);return isPortableTextToolkitList(node)?function renderList(node,index,key){const children=node.children.map(((child,childIndex)=>renderNode({node:child._key?child:react_portable_text_esm_objectSpread(react_portable_text_esm_objectSpread({},child),{},{_key:"li-".concat(index,"-").concat(childIndex)}),index:childIndex,isInline:!1,renderNode}))),component=components.list,handler="function"==typeof component?component:component[node.listItem],List=handler||components.unknownList;if(List===components.unknownList){const style=node.listItem||"bullet";handleMissingComponent(getTemplate('list style "'.concat(style,'"'),"list"),{nodeType:"listStyle",type:style})}return(0,jsx_runtime.jsx)(List,{value:node,index,isInline:!1,renderNode,children},key)}(node,index,key):isPortableTextListItemBlock(node)?function renderListItem(node,index,key){const tree=serializeBlock({node,index,isInline:!1,renderNode}),renderer=components.listItem,handler="function"==typeof renderer?renderer:renderer[node.listItem],Li=handler||components.unknownListItem;if(Li===components.unknownListItem){const style=node.listItem||"bullet";handleMissingComponent(getTemplate('list item style "'.concat(style,'"'),"listItem"),{type:style,nodeType:"listItemStyle"})}let children=tree.children;if(node.style&&"normal"!==node.style){const{listItem}=node;children=renderNode({node:_objectWithoutProperties(node,_excluded2),index,isInline:!1,renderNode})}return(0,jsx_runtime.jsx)(Li,{value:node,index,isInline:!1,renderNode,children},key)}(node,index,key):isPortableTextToolkitSpan(node)?function renderSpan(node,_index,key){const{markDef,markType,markKey}=node,Span=components.marks[markType]||components.unknownMark,children=node.children.map(((child,childIndex)=>renderNode({node:child,index:childIndex,isInline:!0,renderNode})));Span===components.unknownMark&&handleMissingComponent((markType=>getTemplate('mark type "'.concat(markType,'"'),"marks"))(markType),{nodeType:"mark",type:markType});return(0,jsx_runtime.jsx)(Span,{text:spanToPlainText(node),value:markDef,markType,markKey,renderNode,children},key)}(node,0,key):function hasCustomComponentForNode(node){return node._type in components.types}(node)?function renderCustomBlock(node,index,key,isInline){const nodeOptions={value:node,isInline,index,renderNode},Node=components.types[node._type];return Node?(0,jsx_runtime.jsx)(Node,react_portable_text_esm_objectSpread({},nodeOptions),key):null}(node,index,key,isInline):isPortableTextBlock(node)?function renderBlock(node,index,key,isInline){const _serializeBlock=serializeBlock({node,index,isInline,renderNode}),{_key}=_serializeBlock,props=_objectWithoutProperties(_serializeBlock,_excluded3),style=props.node.style||"normal",Block=("function"==typeof components.block?components.block:components.block[style])||components.unknownBlockStyle;Block===components.unknownBlockStyle&&handleMissingComponent(getTemplate('block style "'.concat(style,'"'),"block"),{nodeType:"blockStyle",type:style});return(0,jsx_runtime.jsx)(Block,react_portable_text_esm_objectSpread(react_portable_text_esm_objectSpread({},props),{},{value:props.node,renderNode}),key)}(node,index,key,isInline):isPortableTextToolkitTextNode(node)?function renderText(node,key){if("\n"===node.text){const HardBreak=components.hardBreak;return HardBreak?(0,jsx_runtime.jsx)(HardBreak,{},key):"\n"}return node.text}(node,key):function renderUnknownType(node,index,key,isInline){const nodeOptions={value:node,isInline,index,renderNode};handleMissingComponent(unknownTypeWarning(node._type),{nodeType:"block",type:node._type});const UnknownType=components.unknownType;return(0,jsx_runtime.jsx)(UnknownType,react_portable_text_esm_objectSpread({},nodeOptions),key)}(node,index,key,isInline)}return renderNode};function serializeBlock(options){const{node,index,isInline,renderNode}=options,tree=function buildMarksTree(block){var _a;const{children,markDefs=[]}=block;if(!children||!children.length)return[];const sortedMarks=children.map(sortMarksByOccurences),rootNode={_type:"@span",children:[],markType:"<unknown>"};let nodeStack=[rootNode];for(let i=0;i<children.length;i++){const span=children[i];if(!span)continue;const marksNeeded=sortedMarks[i]||[];let pos=1;if(nodeStack.length>1)for(;pos<nodeStack.length;pos++){const mark=(null==(_a=nodeStack[pos])?void 0:_a.markKey)||"",index=marksNeeded.indexOf(mark);if(-1===index)break;marksNeeded.splice(index,1)}nodeStack=nodeStack.slice(0,pos);let currentNode=nodeStack[nodeStack.length-1];if(currentNode){for(const markKey of marksNeeded){const markDef=markDefs.find((def=>def._key===markKey)),markType=markDef?markDef._type:markKey,node={_type:"@span",_key:span._key,children:[],markDef,markType,markKey};currentNode.children.push(node),nodeStack.push(node),currentNode=node}if(isPortableTextSpan(span)){const lines=span.text.split("\n");for(let line=lines.length;line-- >1;)lines.splice(line,0,"\n");currentNode.children=currentNode.children.concat(lines.map((text=>({_type:"@text",text}))))}else currentNode.children=currentNode.children.concat(span)}}return rootNode.children}(node),children=tree.map(((child,i)=>renderNode({node:child,isInline:!0,index:i,renderNode})));return{_key:node._key||"block-".concat(index),children,index,isInline,node}}function noop(){}},"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js":function(module){module.exports=function(){function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _createForOfIteratorHelperLoose(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(it)return(it=it.call(o)).next.bind(it);if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0;return function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var example="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function parseAssetId(ref){var _ref$split=ref.split("-"),id=_ref$split[1],dimensionString=_ref$split[2],format=_ref$split[3];if(!id||!dimensionString||!format)throw new Error("Malformed asset _ref '"+ref+"'. Expected an id like \""+example+'".');var _dimensionString$spli=dimensionString.split("x"),width=+_dimensionString$spli[0],height=+_dimensionString$spli[1];if(!isFinite(width)||!isFinite(height))throw new Error("Malformed asset _ref '"+ref+"'. Expected an id like \""+example+'".');return{id,width,height,format}}var isRef=function isRef(src){return!!src&&"string"==typeof src._ref},isAsset=function isAsset(src){return!!src&&"string"==typeof src._id},isAssetStub=function isAssetStub(src){var source=src;return!(!source||!source.asset)&&"string"==typeof source.asset.url};function parseSource(source){if(!source)return null;var image;if("string"==typeof source&&isUrl(source))image={asset:{_ref:urlToId(source)}};else if("string"==typeof source)image={asset:{_ref:source}};else if(isRef(source))image={asset:source};else if(isAsset(source))image={asset:{_ref:source._id||""}};else if(isAssetStub(source))image={asset:{_ref:urlToId(source.asset.url)}};else{if("object"!=typeof source.asset)return null;image=_extends({},source)}var img=source;return img.crop&&(image.crop=img.crop),img.hotspot&&(image.hotspot=img.hotspot),applyDefaults(image)}function isUrl(url){return/^https?:\/\//.test(""+url)}function urlToId(url){return("image-"+url.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function applyDefaults(image){if(image.crop&&image.hotspot)return image;var result=_extends({},image);return result.crop||(result.crop={left:0,top:0,bottom:0,right:0}),result.hotspot||(result.hotspot={x:.5,y:.5,height:1,width:1}),result}var SPEC_NAME_TO_URL_NAME_MAPPINGS=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function urlForImage(options){var spec=_extends({},options||{}),source=spec.source;delete spec.source;var image=parseSource(source);if(!image)throw new Error("Unable to resolve image URL from source ("+JSON.stringify(source)+")");var asset=parseAssetId(image.asset._ref||image.asset._id||""),cropLeft=Math.round(image.crop.left*asset.width),cropTop=Math.round(image.crop.top*asset.height),crop={left:cropLeft,top:cropTop,width:Math.round(asset.width-image.crop.right*asset.width-cropLeft),height:Math.round(asset.height-image.crop.bottom*asset.height-cropTop)},hotSpotVerticalRadius=image.hotspot.height*asset.height/2,hotSpotHorizontalRadius=image.hotspot.width*asset.width/2,hotSpotCenterX=image.hotspot.x*asset.width,hotSpotCenterY=image.hotspot.y*asset.height,hotspot={left:hotSpotCenterX-hotSpotHorizontalRadius,top:hotSpotCenterY-hotSpotVerticalRadius,right:hotSpotCenterX+hotSpotHorizontalRadius,bottom:hotSpotCenterY+hotSpotVerticalRadius};return spec.rect||spec.focalPoint||spec.ignoreImageParams||spec.crop||(spec=_extends({},spec,fit({crop,hotspot},spec))),specToImageUrl(_extends({},spec,{asset}))}function specToImageUrl(spec){var cdnUrl=(spec.baseUrl||"https://cdn.sanity.io").replace(/\/+$/,""),filename=spec.asset.id+"-"+spec.asset.width+"x"+spec.asset.height+"."+spec.asset.format,baseUrl=cdnUrl+"/images/"+spec.projectId+"/"+spec.dataset+"/"+filename,params=[];if(spec.rect){var _spec$rect=spec.rect,left=_spec$rect.left,top=_spec$rect.top,width=_spec$rect.width,height=_spec$rect.height;(0!==left||0!==top||height!==spec.asset.height||width!==spec.asset.width)&&params.push("rect="+left+","+top+","+width+","+height)}spec.bg&&params.push("bg="+spec.bg),spec.focalPoint&&(params.push("fp-x="+spec.focalPoint.x),params.push("fp-y="+spec.focalPoint.y));var flip=[spec.flipHorizontal&&"h",spec.flipVertical&&"v"].filter(Boolean).join("");return flip&&params.push("flip="+flip),SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach((function(mapping){var specName=mapping[0],param=mapping[1];void 0!==spec[specName]?params.push(param+"="+encodeURIComponent(spec[specName])):void 0!==spec[param]&&params.push(param+"="+encodeURIComponent(spec[param]))})),0===params.length?baseUrl:baseUrl+"?"+params.join("&")}function fit(source,spec){var cropRect,imgWidth=spec.width,imgHeight=spec.height;if(!imgWidth||!imgHeight)return{width:imgWidth,height:imgHeight,rect:source.crop};var crop=source.crop,hotspot=source.hotspot,desiredAspectRatio=imgWidth/imgHeight;if(crop.width/crop.height>desiredAspectRatio){var height=Math.round(crop.height),width=Math.round(height*desiredAspectRatio),top=Math.max(0,Math.round(crop.top)),hotspotXCenter=Math.round((hotspot.right-hotspot.left)/2+hotspot.left),left=Math.max(0,Math.round(hotspotXCenter-width/2));left<crop.left?left=crop.left:left+width>crop.left+crop.width&&(left=crop.left+crop.width-width),cropRect={left,top,width,height}}else{var _width=crop.width,_height=Math.round(_width/desiredAspectRatio),_left=Math.max(0,Math.round(crop.left)),hotspotYCenter=Math.round((hotspot.bottom-hotspot.top)/2+hotspot.top),_top=Math.max(0,Math.round(hotspotYCenter-_height/2));_top<crop.top?_top=crop.top:_top+_height>crop.top+crop.height&&(_top=crop.top+crop.height-_height),cropRect={left:_left,top:_top,width:_width,height:_height}}return{width:imgWidth,height:imgHeight,rect:cropRect}}var validFits=["clip","crop","fill","fillmax","max","scale","min"],validCrops=["top","bottom","left","right","center","focalpoint","entropy"],validAutoModes=["format"];function isSanityModernClientLike(client){return!(!client||!("config"in client))&&"function"==typeof client.config}function isSanityClientLike(client){return!(!client||!("clientConfig"in client))&&"object"==typeof client.clientConfig}function rewriteSpecName(key){for(var _step,_iterator=_createForOfIteratorHelperLoose(SPEC_NAME_TO_URL_NAME_MAPPINGS);!(_step=_iterator()).done;){var entry=_step.value,specName=entry[0],param=entry[1];if(key===specName||key===param)return specName}return key}function urlBuilder(options){if(isSanityModernClientLike(options)){var _options$config=options.config(),apiUrl=_options$config.apiHost,projectId=_options$config.projectId,dataset=_options$config.dataset;return new ImageUrlBuilder(null,{baseUrl:(apiUrl||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId,dataset})}var client=options;if(isSanityClientLike(client)){var _client$clientConfig=client.clientConfig,_apiUrl=_client$clientConfig.apiHost,_projectId=_client$clientConfig.projectId,_dataset=_client$clientConfig.dataset;return new ImageUrlBuilder(null,{baseUrl:(_apiUrl||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:_projectId,dataset:_dataset})}return new ImageUrlBuilder(null,options)}var ImageUrlBuilder=function(){function ImageUrlBuilder(parent,options){this.options=void 0,this.options=parent?_extends({},parent.options||{},options||{}):_extends({},options||{})}var _proto=ImageUrlBuilder.prototype;return _proto.withOptions=function withOptions(options){var baseUrl=options.baseUrl||this.options.baseUrl,newOptions={baseUrl};for(var key in options)options.hasOwnProperty(key)&&(newOptions[rewriteSpecName(key)]=options[key]);return new ImageUrlBuilder(this,_extends({baseUrl},newOptions))},_proto.image=function image(source){return this.withOptions({source})},_proto.dataset=function dataset(_dataset2){return this.withOptions({dataset:_dataset2})},_proto.projectId=function projectId(_projectId2){return this.withOptions({projectId:_projectId2})},_proto.bg=function bg(_bg){return this.withOptions({bg:_bg})},_proto.dpr=function dpr(_dpr){return this.withOptions(_dpr&&1!==_dpr?{dpr:_dpr}:{})},_proto.width=function width(_width){return this.withOptions({width:_width})},_proto.height=function height(_height){return this.withOptions({height:_height})},_proto.focalPoint=function focalPoint(x,y){return this.withOptions({focalPoint:{x,y}})},_proto.maxWidth=function maxWidth(_maxWidth){return this.withOptions({maxWidth:_maxWidth})},_proto.minWidth=function minWidth(_minWidth){return this.withOptions({minWidth:_minWidth})},_proto.maxHeight=function maxHeight(_maxHeight){return this.withOptions({maxHeight:_maxHeight})},_proto.minHeight=function minHeight(_minHeight){return this.withOptions({minHeight:_minHeight})},_proto.size=function size(width,height){return this.withOptions({width,height})},_proto.blur=function blur(_blur){return this.withOptions({blur:_blur})},_proto.sharpen=function sharpen(_sharpen){return this.withOptions({sharpen:_sharpen})},_proto.rect=function rect(left,top,width,height){return this.withOptions({rect:{left,top,width,height}})},_proto.format=function format(_format){return this.withOptions({format:_format})},_proto.invert=function invert(_invert){return this.withOptions({invert:_invert})},_proto.orientation=function orientation(_orientation){return this.withOptions({orientation:_orientation})},_proto.quality=function quality(_quality){return this.withOptions({quality:_quality})},_proto.forceDownload=function forceDownload(download){return this.withOptions({download})},_proto.flipHorizontal=function flipHorizontal(){return this.withOptions({flipHorizontal:!0})},_proto.flipVertical=function flipVertical(){return this.withOptions({flipVertical:!0})},_proto.ignoreImageParams=function ignoreImageParams(){return this.withOptions({ignoreImageParams:!0})},_proto.fit=function fit(value){if(-1===validFits.indexOf(value))throw new Error('Invalid fit mode "'+value+'"');return this.withOptions({fit:value})},_proto.crop=function crop(value){if(-1===validCrops.indexOf(value))throw new Error('Invalid crop mode "'+value+'"');return this.withOptions({crop:value})},_proto.saturation=function saturation(_saturation){return this.withOptions({saturation:_saturation})},_proto.auto=function auto(value){if(-1===validAutoModes.indexOf(value))throw new Error('Invalid auto mode "'+value+'"');return this.withOptions({auto:value})},_proto.pad=function pad(_pad){return this.withOptions({pad:_pad})},_proto.url=function url(){return urlForImage(this.options)},_proto.toString=function toString(){return this.url()},ImageUrlBuilder}();return urlBuilder}()},"./node_modules/@sanity/preview-kit/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R2:()=>definePreview});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const globalCache=[];function shallowEqualArrays(arrA,arrB,equal=((a,b)=>a===b)){if(arrA===arrB)return!0;if(!arrA||!arrB)return!1;const len=arrA.length;if(arrB.length!==len)return!1;for(let i=0;i<len;i++)if(!equal(arrA[i],arrB[i]))return!1;return!0}function query(fn,keys,preload=!1,config={}){for(const entry of globalCache)if(shallowEqualArrays(keys,entry.keys,entry.equal)){if(preload)return;if(Object.prototype.hasOwnProperty.call(entry,"error"))throw entry.error;if(Object.prototype.hasOwnProperty.call(entry,"response"))return config.lifespan&&config.lifespan>0&&(entry.timeout&&clearTimeout(entry.timeout),entry.timeout=setTimeout(entry.remove,config.lifespan)),entry.response;if(!preload)throw entry.promise}const entry={keys,equal:config.equal,remove:()=>{const index=globalCache.indexOf(entry);-1!==index&&globalCache.splice(index,1)},promise:fn(...keys).then((response=>{entry.response=response,config.lifespan&&config.lifespan>0&&(entry.timeout=setTimeout(entry.remove,config.lifespan))})).catch((error=>entry.error=error))};if(globalCache.push(entry),!preload)throw entry.promise}const suspend=(fn,keys,config)=>query(fn,keys,!1,config);__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");var console=__webpack_require__("./node_modules/console-browserify/index.js");const _definePreview=_ref=>{let store,{projectId,dataset,documentLimit=3e3,subscriptionThrottleMs=10,overlayDrafts=!0,listen=!0,importEventSourcePolyfill,importGroqStore,preload,onPublicAccessOnly,checkAuth,includeTypes}=_ref;if(!projectId){console.warn("No projectId set for createPreviewHook, returning dummy hook");return function usePreview2(){return console.warn("The hook returned by createPreviewHook is a dummy as there is no projectId set, returning null"),null}}return function usePreview(token,query,_params,_serverSnapshot){if("undefined"==typeof document)throw new Error("Calling usePreview outside a browser environment isn't supported. Ensure the component using the hook is only rendering on the client. For example by wrapping it in PreviewSuspense.");if(!token&&null!==token)throw new Error("No `token` given to usePreview hook, if this is intentional then set it to `null`");const[serverSnapshot]=(0,react.useState)((()=>_serverSnapshot)),params=function useParams(params){const stringifiedParams=(0,react.useMemo)((()=>JSON.stringify(params||{})),[params]);return(0,react.useMemo)((()=>JSON.parse(stringifiedParams)),[stringifiedParams])}(_params);if(!store){if(onPublicAccessOnly){checkAuth(projectId,token)||onPublicAccessOnly()}const groqStore=importGroqStore();store=groqStore({projectId,dataset,documentLimit,subscriptionThrottleMs,includeTypes,token:null===token?void 0:token,EventSource:null===token?void 0:importEventSourcePolyfill(),listen,overlayDrafts})}const initial=null!=serverSnapshot?serverSnapshot:preload(store,query,params),syncStore=(0,react.useMemo)((()=>{let snapshot=initial;return{getServerSnapshot:void 0===serverSnapshot?void 0:()=>serverSnapshot,getSnapshot:()=>snapshot,subscribe:onStoreChange=>{let subscription;const handleError=err=>{throw console.error("Error thrown in the usePreviewHook subscription",err),err};return listen?subscription=store.subscribe(query,void 0===params?{}:params,((err,result)=>{err?handleError(err):(snapshot=result,onStoreChange())})):store.query(query,params).then((result=>{snapshot=result,onStoreChange()})).catch(handleError),()=>null==subscription?void 0:subscription.unsubscribe()}}}),[initial,params,query,serverSnapshot]);return(0,react.useEffect)((()=>{const callback=()=>{store.close()};return window.addEventListener("beforeunload",callback),()=>window.removeEventListener("beforeunload",callback)}),[]),(0,react.useSyncExternalStore)(syncStore.subscribe,syncStore.getSnapshot,syncStore.getServerSnapshot)}},definePreview=config=>_definePreview({...config,importEventSourcePolyfill:()=>suspend((()=>(async()=>{const pkg=await __webpack_require__.e(1982).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@sanity/eventsource/browser.js",23));return"default"in pkg?pkg.default:pkg})()),["@sanity/preview-kit","@sanity/eventsource/browser"]),importGroqStore:()=>suspend((()=>(async()=>{const pkg=await __webpack_require__.e(2664).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@sanity/groq-store/dist/index.browser.mjs")),{groqStore}="default"in pkg?pkg.default:pkg;return groqStore})()),["@sanity/preview-kit","@sanity/groq-store"]),preload:(store,query,params)=>suspend((()=>((store,query,params)=>store.query(query,params))(store,query,params)),["@sanity/preview-kit","preload",query,JSON.stringify(null!=params?params:{})]),checkAuth:(projectId,token)=>suspend((()=>(async(projectId,token)=>{const headers=token?{Authorization:"Bearer ".concat(token)}:void 0,res=await fetch("https://".concat(projectId,".api.sanity.io/v1/users/me"),{credentials:"include",headers}),json=await res.json();return Boolean(null==json?void 0:json.id)})(projectId,token)),["@sanity/preview-kit","checkAuth",projectId,token])})},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);