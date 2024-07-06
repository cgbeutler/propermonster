import { validate, NIL } from 'uuid'


export class CharacterSummary {
    private _id: string = "";
    public get id(): string { return this._id; }
    private set id(value: string) {
        if (!validate(value)) { this._id = NIL; return; }
        this._id = value;
    }

    public name: string = "";
    public pronouns: string = "";
    
    public playbook: string = "";

    public static FromJson( json: string ): CharacterSummary {
        return Object.assign( new CharacterSummary(), JSON.parse(json) )
    }
}

