/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    var head = null;
    var tail = null;


   function getHead(){
    return head;
   }

   function getTail(){
    return tail;
   }

   function add(head, tail){

      var node = {};
      node.value = head;
      node.next = getTail();
    
    if(node.next === null){
      return node;
     }else{
        var newNode = {};
        newNode.value = head;
        newNode.next = tail;
        return
      }
    }


   function remove(){
    return remove;
   }

   function get(){
    return get;
   }

   function insert(){
    return insert;
   }

     return { // this returns module functions (objects)
        getHead: getHead,
        getTail: getTail,
        add: add,
        remove: remove,
        get: get,
        insert:insert,

    };
}
