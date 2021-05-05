export class Triangle {
  constructor(side1, side2, side3) {
  	this.s1 = side1;
  	this.s2 = side2;
  	this.s3 = side3;
  }

  kind() {
  	if (!(this.s1 && this.s2 && this.s3)) throw new Error("");
  	if((this.s1 + this.s2) <= this.s3 || 
  		(this.s1 + this.s3) <= this.s2 || 
  		(this.s2 + this.s3) <= this.s1) throw new Error("");

  	if (this.s1 === this.s2 && this.s1 === this.s3 && this.s2 === this.s3) return "equilateral";
  	if (this.s1 === this.s2 || this.s1 === this.s3 || this.s2 === this.s3) return "isosceles";
  	if (this.s1 !== this.s2 && this.s1 !== this.s3 && this.s2 !== this.s3) return "scalene"
  }
}