import jsPDF from 'jspdf';

const exportjsPDF = () => {
    let doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.save('document.pdf');
}

export {exportjsPDF}; 