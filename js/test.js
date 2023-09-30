// function invoice_download(attribute){
//     const url = 'https://harshitlohia5.pythonanywhere.com/invoice_download/';
    
//     const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
//       'Content-Type': 'application/pdf',
//     },
//     body:JSON.stringify(attribute)
//     };
    
//     return fetch(url, requestOptions)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
//   }
  

//   const attribute = {
//     "invoice_id" : 2323,
//     "customer_name" : "customer_name",
//     "date" : "date",
//     "order_id" : "202309292115412",
//     "customer_id" : "customer_id",
//     "event_name" : "event_name",
//     "amount" : "999",
//     "quantity" : "2",
//     "gst" : "18",
//     "total_amount" : "1017"
//     }

// invoice_download(attribute)
// .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.blob(); // Convert the response to a Blob
//   })
//   .then((blob) => {
//     // Create a temporary URL for the Blob
//     const blobUrl = window.URL.createObjectURL(blob);

//     // Create a temporary link element to trigger the download
//     const a = document.createElement('a');
//     a.href = blobUrl;
//     a.download = 'your_invoice.pdf'; // Specify the filename for the download
//     a.style.display = 'none';

//     // Append the link to the document and trigger the click event
//     document.body.appendChild(a);
//     a.click();

//     // Clean up by revoking the temporary URL and removing the link
//     window.URL.revokeObjectURL(blobUrl);
//     document.body.removeChild(a);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });


function invoice_download(attribute) {
    const url = 'https://harshitlohia5.pythonanywhere.com/invoice_download/';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'ghsJJDGEBBDC%^&C%^527272---etgdbRandom',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(attribute),
    };
  
    return fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.blob(); // Convert the response to a Blob
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  const attribute = {
    "invoice_id": 2323,
    "customer_name": "customer_name",
    "date": "date",
    "order_id": "202309292115412",
    "customer_id": "customer_id",
    "event_name": "event_name",
    "amount": "999",
    "quantity": "2",
    "gst": "18",
    "total_amount": "1017"
  };
  const order_id = attribute.order_id;
  
  function download(){
  invoice_download(attribute)
    .then((blob) => {
      // Create a temporary URL for the Blob
      const blobUrl = window.URL.createObjectURL(blob);
  
      // Create a temporary link element to trigger the download
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `youthstring_${order_id}.pdf`; // Specify the filename for the download
      a.style.display = 'none';
  
      // Append the link to the document and trigger the click event
      document.body.appendChild(a);
      a.click();
  
      // Clean up by revoking the temporary URL and removing the link
      window.URL.revokeObjectURL(blobUrl);
      document.body.removeChild(a);
      console.log("done")
    })
    .catch((error) => {
      console.error('Error:', error);
    });}
  