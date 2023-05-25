class Thermostat {
    constructor() {
        this.temperature = 20;
        this.psm = true;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.psm === true && this.temperature < 25) {
            this.temperature ++;
        } else if (this.psm === false && this.temperature < 32) {
            this.temperature ++;
        }
        
    }

    down() {
        if (this.temperature > 10) this.temperature --;       
    }

    setPowerSavingMode(bool) {
        this.psm = bool;
    }

    reset() {
        this.temperature = 20;
      }
    
      getCurrentEnergyUsage() {
        if (this.temperature < 18) { 
          return 'low-usage';
        } else if (this.temperature <= 25) {
          return 'medium-usage';
        } else {
          return 'high-usage';
        }
      }
}

module.exports = Thermostat;