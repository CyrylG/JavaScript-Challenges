const Thermostat = require('./thermostat');

describe('Thermostat', () => {
    it('returns initial temperature of 20', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toBe(20);
    })

    it('raises temperature by 1', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(21);
    })

    it('lowers temperature by 1', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(19);
    })

    it('does not lower temperature below 10', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(10);
    })

    it ('does not raise temperature above 25 when power saving mode is on', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(25);
    })

    it ('does not raise temperature above 32 when power saving mode is off', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(32);
    })

    it('#reset resets temp to 20, from above and below', () => {
        const thermostat = new Thermostat();
    
        thermostat.up();
        thermostat.up();
    
        thermostat.reset();
    
        expect(thermostat.getTemperature()).toBe(20);
        
        thermostat.down();
        thermostat.down();
    
        thermostat.reset();
    
        expect(thermostat.getTemperature()).toBe(20);
      })
    
      it('#getCurrentEnergyUsage returns "low-usage" when temp is < 18', () => {
        const thermostat = new Thermostat();
    
        //call #down 5 times
        for (let i = 0 ; i < 5 ; i++) {
          thermostat.down();
        }
    
        expect(thermostat.getCurrentEnergyUsage()).toBe('low-usage');
      })
    
      it('#getCurrentEnergyUsage returns "medium-usage" when temp is <= 25', () => {
        const thermostat = new Thermostat();
    
        //call #up 5 times
        for (let i = 0 ; i < 5 ; i++) {
          thermostat.up();
        }
    
        expect(thermostat.getCurrentEnergyUsage()).toBe('medium-usage');
      })
    
      it('#getCurrentEnergyUsage returns "high-usage" when temp is > 25', () => {
        const thermostat = new Thermostat();
    
        thermostat.setPowerSavingMode(false);
    
        //call #up 10 times
        for (let i = 0 ; i < 10 ; i++) {
          thermostat.up();
        }
    
        expect(thermostat.getCurrentEnergyUsage()).toBe('high-usage');
      })
})