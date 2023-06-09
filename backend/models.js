require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, { dialect: 'mysql', host: process.env.DBHOST})

//Galleries
const SightsGallery = sequelize.define('SightsGallery', {
    image: {
        type: DataTypes.TEXT,
    },
    preview: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {timestamps: false});
const ServicesGallery = sequelize.define('ServicesGallery', {
    image: {
        type: DataTypes.TEXT
    },
    preview:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {timestamps: false});
//Models
const Services = sequelize.define('Services', {
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT
    },
    href:{
        type: DataTypes.STRING
    },
    isRestaurant:{
        type: DataTypes.BOOLEAN
    }
})
const Sights = sequelize.define('Sights', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shortdesc: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    fulldesc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    href: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
const Programs = sequelize.define('Programs', {
    title: {
        type: DataTypes.STRING
    },
    start: {
        type: DataTypes.DATE,

    },
    end: {
        type: DataTypes.DATE,
        allowNull: true
    },
    desc: {
        type: DataTypes.TEXT
    },
    image:{
        type: DataTypes.STRING
    }
})
const Accomodations = sequelize.define('Accomodations', {
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING
    },
    desc:{
        type: DataTypes.TEXT
    },
    href: {
        type: DataTypes.STRING
    }
})
SightsGallery.belongsTo(Sights, {foreignKey: "itemID"});
ServicesGallery.belongsTo(Services, {foreignKey: "itemID"});


module.exports = {sequelize, Sights, Services, Programs, SightsGallery, ServicesGallery, Accomodations};