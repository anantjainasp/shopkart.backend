import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  stock: { 
    type: Number, 
    required: true, 
    default: 0 
  },
  rating: { 
    type: Number, 
    default: 0 
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.model('Product', productSchema);