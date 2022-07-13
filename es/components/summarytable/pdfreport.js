import jsPDF from 'jspdf';

var exportjsPDF = function exportjsPDF() {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.save('document.pdf');
};

export { exportjsPDF };