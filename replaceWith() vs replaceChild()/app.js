////////////// replaceChild() vs replaceWith() ///////////////


////////////// replaceChild() //////////////

// ParentNode.replaceChild(newChildNode,oldChildNode)

// Example:Replace TextNode
const parent = document.querySelector('ul').children[1];
let oldChild = parent.firstChild;
let newChild = document.createTextNode('replaceChild()')

parent.replaceChild(newChild,oldChild)


////////////// replaceWith() ///////////////


//oldChildNode.replaceWith(newChildNode)

// 1# There is no need to find the Parent Element.
// 2# It also accepts a DOMString (a html string), so there is no need to create a new Element. However bear in mind that using a DOMString will result in creation of a Text node - it will be considered as the inside text.
// 3# Not supported by Internet Explorer


// Example: Replace TextNode:
//console.log(oldChild, parent.firstChild)
parent.firstChild.replaceWith('replaceWith()');


// Example2: Replace HTML Element:

newChild = document.createElement('a');
newChild.appendChild(document.createTextNode(' replaceWith()Anchor'))

oldChild = parent.firstElementChild;

oldChild.replaceWith(newChild)