

function sendLink(message){

    const [...args] = message.content
            .split(/\s+/);

        if (args[1] === 'SinglyLL' && args[3] === 'C++') {
            message.channel.send("Singly Linked List in Cpp", { files: ["./Codes/SinglyLLCpp.txt"] });
        }
        else if (args[1] === 'SinglyLL' && args[3] === 'Python') {
            message.channel.send("Singly Linked List in Python", { files: ["./Codes/SinglyLLPython.txt"] });
        }
        else if (args[1] === 'SinglyLL' && args[3] === 'Java') {
            message.channel.send("Singly Linked List in Java", { files: ["./Codes/SinglyLLJava.txt"] });
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'C++') {
            message.channel.send("Doubly Linked List in Cpp", { files: ["./Codes/DoublyLLCpp.txt"] });
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'Python') {
            message.channel.send("Doubly Linked List in Python", { files: ["./Codes/DoublyLLPython.txt"] });
        }
        else if (args[1] === 'DoublyLL' && args[3] === 'Java') {
            message.channel.send("Doubly Linked List in Java", { files: ["./Codes/DoublyLLJava.txt"] });
        }

}

module.exports=sendLink;