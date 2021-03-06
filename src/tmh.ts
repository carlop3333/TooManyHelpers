import {Commands, World} from "mojang-minecraft";

/**
 * @description Scoreboard and tags getters
 */
export class gameData {

	

	/**
	 * 
	 * @param ObjectiveName objective name
	 * @param PlayerName player name
	 * @returns true (or false if objective doesnt exists)
	 */
	getScoreboardNumber(ObjectiveName: string, PlayerName: string) {
		try {
			//FIXME: No ideas here..
			let scoreboard = Commands.run(`scoreboard players list "${PlayerName}"`,World.getDimension("overworld"));
		} catch (e) {}
    }

	/**
	 * 
	 * @param PlayerName player name
	 * @param Tags  tags that the player has
	 * @returns true (or false if tag doesnt exists ) 
	 */
	static hasTags(PlayerName: string, Tags:string) {
		try {
			let taglist: string;
			taglist = Commands.run(`tag "${PlayerName}" list`,World.getDimension("overworld"))
			if (taglist.search(Tags) == -1) {return true; } else { return false; }
		} catch (e) {}
	}
}	
