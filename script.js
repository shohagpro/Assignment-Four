        // Validation and Condition for Cruise Ticket
        function ticketCounting(cruiseTicket,isIncrease){
            let cruiseTicketValue =cruiseTicketInput(cruiseTicket)
            let newCruiseTicketValue= cruiseTicketValue
            if(isIncrease == true){
                newCruiseTicketValue= cruiseTicketValue +1
            }
            if(isIncrease == false && cruiseTicketValue >0){
                newCruiseTicketValue= cruiseTicketValue -1
            }
            document.getElementById(cruiseTicket + '-class-ticket-input').value =newCruiseTicketValue
            let ticketTotal =0
            if(cruiseTicket=='first'){
                ticketTotal =  newCruiseTicketValue * 150
            }
            if(cruiseTicket == 'economy'){
                ticketTotal =  newCruiseTicketValue * 100
            }
            document.getElementById(cruiseTicket+'-class-price').innerText =  ticketTotal
            getTotal()
        }

        // Total Calculation with Tax
        function getTotal(){ 
            let firstClassVal =cruiseTicketInput('first') 
            let economyClassVal = cruiseTicketInput('economy')
            const total =(firstClassVal * 150) + (economyClassVal * 100)
            document.getElementById('sub-total').innerText =total
        
            const tax = Math.round(total * 0.1)
            document.getElementById('tax').innerText =tax
        
            const grandTotal =total + tax 
            document.getElementById('total').innerText = grandTotal
        
        }
        
        // Input Insert
        function cruiseTicketInput(cruiseTicket){
            let ticketClassInput =document.getElementById(cruiseTicket +'-class-ticket-input')
            let cruiseTicketValue=parseInt(ticketClassInput.value)
            return cruiseTicketValue
        }

        // Congrats Alert
        function cruiseTicketCongrats(){
            alert("Congratulation Your Cruise Ticket Booking Successful");
        }