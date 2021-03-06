/**
 * @description Defines button objects
 * @export
 * @class Button
 * @extends {createjs.Bitmap}
 **/

module objects {
    export class Button extends createjs.Bitmap {
        width: number;
        height : number;

        constructor(pathString: string, x:number, y:number) {
            super(assets.getResult(pathString));
            // Set the registration point of the button. This is used for transformations
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            // Set the position of the button
            this.x = x;
            this.y = y;

            // Register mouseover and mouseout event listeners. 
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
        }

        // Modify the bitmaps alpha value when hovering over the button
        overButton(event: createjs.MouseEvent) : void {
            event.currentTarget.alpha = 0.7;
        }
        
        // Modify the bitmaps alphave when mouse is not hovering
        outButton(event:createjs.MouseEvent) : void {
            event.currentTarget.alpha = 1.0;
        }
    }
}