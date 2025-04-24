import React, { useState } from 'react';
import { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow } from 'docx';
import { saveAs } from 'file-saver';

const DocumentPreview = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsAccepted(event.target.checked);
  };

  const handleDownload = async () => {
    if (isAccepted) {
      try {
        // Create a new Document
        const doc = new Document({
          sections: [
            {
              properties: {},
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "PURCHASE ORDER",
                      bold: true,
                      size: 48,
                    }),
                  ],
                  alignment: "center",
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "PO #1258820",
                      bold: true,
                      size: 32,
                    }),
                  ],
                  alignment: "center",
                }),
                new Paragraph({
                  text: "BILL TO:",
                  bold: true,
                }),
                new Paragraph({
                  text: "Company Name\n252 Stationery Street, Manchester, IL 22565\n(444) 456-9900\nEmail Address",
                }),
                new Paragraph({
                  text: "SHIP TO:",
                  bold: true,
                }),
                new Paragraph({
                  text: "Company Name\n252 Stationery Street, Manchester, IL 22565\n(444) 456-9900\nEmail Address",
                }),
                new Paragraph({
                  text: "Shipping Method and Shipping Terms",
                  bold: true,
                }),
                new Paragraph({
                  text: "Shipping Method: Express shipment / Paid by customer",
                }),
                new Paragraph({
                  text: "Ship Via: DHL",
                }),
                new Paragraph({
                  text: "Payment: NET 30",
                }),
                new Paragraph({
                  text: "Delivery Date: 2024-12-31",
                }),
                new Paragraph({
                  text: "Order Items",
                  bold: true,
                }),
                new Table({
                  rows: [
                    new TableRow({
                      children: [
                        new TableCell({
                          children: [new Paragraph("ITEM NO.")],
                        }),
                        new TableCell({
                          children: [new Paragraph("DESCRIPTION")],
                        }),
                        new TableCell({
                          children: [new Paragraph("QTY")],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          children: [new Paragraph("AX100")],
                        }),
                        new TableCell({
                          children: [new Paragraph("Item from stock")],
                        }),
                        new TableCell({
                          children: [new Paragraph("10")],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          children: [new Paragraph("BX200")],
                        }),
                        new TableCell({
                          children: [new Paragraph("Service description")],
                        }),
                        new TableCell({
                          children: [new Paragraph("5")],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          children: [new Paragraph("CX300")],
                        }),
                        new TableCell({
                          children: [new Paragraph("Describe item#3")],
                        }),
                        new TableCell({
                          children: [new Paragraph("10")],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          children: [new Paragraph("DX400")],
                        }),
                        new TableCell({
                          children: [new Paragraph("Describe item#4")],
                        }),
                        new TableCell({
                          children: [new Paragraph("5")],
                        }),
                      ],
                    }),
                  ],
                }),
                new Paragraph({
                  text: "Authorized Signature:",
                  bold: true,
                }),
                new Paragraph({
                  text: "_",
                }),
              ],
            },
          ],
        });

        // Create a Blob from the document
        const blob = await Packer.toBlob(doc);

        // Check if blob creation was successful
        if (blob) {
          // Download the Blob
          saveAs(blob, 'Purchase_Order_2024-12-31.docx');
        } else {
          console.error('Failed to create the document blob.');
        }
      } catch (error) {
        console.error('Error generating or downloading document:', error);
      }
    } else {
      alert('You need to accept the document before downloading.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Document Preview</h2>
      <iframe
        src="https://1drv.ms/w/c/a9de9d517622ecf7/EXU4S2mhlcFLsEZGt9UGnvwBz9t9gNwSJvqnseB6MnoqGg?e=mjlsvu"
        title="Document Preview"
        style={{ width: '800px', height: '400px', border: '1px solid #ccc',marginRight:'90px' }}
      ></iframe>

      <div style={{ marginTop: '20px' }}>
        <label>
          <input
            type="checkbox"
            checked={isAccepted}
            onChange={handleCheckboxChange}
          />{' '}
          Do you accept this document?
        </label>
      </div>

      <button
        onClick={handleDownload}
        disabled={!isAccepted}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: isAccepted ? '#007bff' : '#ccc',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: isAccepted ? 'pointer' : 'not-allowed',
        }}
      >
        Download Document
      </button>
    </div>
  );
};

export default DocumentPreview;
