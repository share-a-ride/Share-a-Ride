const axios = require('axios');

const checkPaymentStatus = async (orderId) => {
  try {
    const response = await axios.get(`https://api.sandbox.midtrans.com/v2/${orderId}/status`, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from('SB-Mid-server-xvUL2muo6OumITLOfsgy0pMP' + ':').toString('base64')
      }
    });
    const channel_response_code = response.data.channel_response_code;
    if (channel_response_code === '200') {
      return { success: true };
    } else {
      return { success: false, message: response.data.channel_response_message };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
};

module.exports = {
  checkPaymentStatus,
};